git: 
	@git pull
	@git add .
	@git commit -S -m "$m" #m="your message"
	$(info ************ REMEMBER TO PUSH TO GIT************)