var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var multer = require('multer')
var app = express()
var cookie = require('cookie-parser')
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookie())
app.get('/words',function(req,res){	
	fs.readFile('words/word.txt','utf-8',function(err,data){
		if(err){			
			console.log(err); 			
		}else{			
			var text = JSON.parse(data);					
			res.json(text);			
		}		
	})
})
app.get('/imgsrc',function(req,res){	
	fs.readFile('imgsrc/imgsrc.txt','utf-8',function(err,data){
		if(err){
			console.log(err); 
		}else{
			var text = JSON.parse(data)
			res.json(text);
		}
	})
})
app.post('/register',function(req,res){
	fs.exists('users',function(exi){
		if(exi){
			writeFile();
		}else{
			fs.mkdir('users',function(err){
				if(err){
					res.status(200).json({code:0,message:'系统创建文件夹失败'});
				}else{
					writeFile();
				}
			})
		}
	})
	function writeFile(){
		var filename = 'users/'+req.body.petname + '.txt';		
		fs.exists(filename,function(exi){			
			if(exi){
				res.status(200).json({code:1,message:'用户存在，请重新注册'})				
			}else{
                req.body.ip =req.ip;
                req.body.time = new Date();              
                fs.writeFile(filename,JSON.stringify(req.body),function(err){
                	if(err){
                		res.status(200).json({code:2,message:'系统写入文件失败'}) 		
                	}else{
                		res.status(200).json({code:3,message:'注册成功'})
                	}
                })
			}	
		})
	}
})
//登录
app.post('/login',function(req,res){
	var fileName = 'users/'+req.body.petname+'.txt';
	fs.exists(fileName,function(exi){
		if(exi){
			fs.readFile(fileName,function(err,data){
				if(err){
					res.status(200).json({code:1,message:'系统错误，读取文件失败'})
				}else{
					var user = JSON.parse(data)
					if(req.body.password == user.password){
						var expires = new Date();
						expires.setMonth(expires.getMonth() + 1)
						res.cookie('petname',req.body.petname,{expires})
						res.status(200).json({code:3,message:'登录成功'})
					}else{  						   			
			   			res.status(200).json({code:2,message:'密码错误，请重新输入'})
			   		} 
				}				
			})
		}else{			
			res.status(200).json({code:0,message:'用户不存在，请先去注册'})
		}
	})
})
app.listen(3000, function(){
	console.log('服务器开启,端口3000')	
})
