git: 
	@git pull
	@git add .
	@git commit -S -m "$m" #m="your message"
	$(info ************ REMBER TO PUSH TO GIT************)