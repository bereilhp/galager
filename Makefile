git: 
	@git pull
	@git add .
	@git commit -S -m "$m" #m="your message"
	@git push -u origin dev