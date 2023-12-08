//your JS code here. If required.
let ans = "";
   for(let i = 1;i<=20;i++)
	   {
		   if(i%3 == 0){
			   ans += "Fizz "+ "\n";
		   }
		   else if(i%5 == 0){   
			   ans += "Buzz "+ "\n";
		   }
		   else if(i%3 == 0 && i%5==0){
			   ans += 'FizzBuzz '+ "\n";
		   }
		   else{
			   ans += i+" "+ "\n";
		   }
	   }
  alert(ans);
