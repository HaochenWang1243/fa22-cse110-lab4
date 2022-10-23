# JS-part2
## Q1:
3 is printed as the final value of the function-scoped variable i.The loop iterates for 3 times since the length of the prices array 
is 3. i starts from 0 and 3 is added to it during the loop.
## Q2:
150 is printed as the final value of the function-scoped variable discountPrice, which stores the 50% discounted price in each iteration of the loop. Since the last price in the prices array is 300, its 50% off price is 150.
## Q3:
150 is printed as the final value of the function-scoped variable finalPrice. In the last iteration of the for loop, discountPrice is 150 and finalPrice=Math.round(discountPrice*100)/100 = Math.round(15000)/100 = 150.
## Q4:
The function returns the array [ 50, 100, 150 ]. The 3 numbers is the value of finalPrice in each iteration of the for loop.
## Q5:
code returns an error because i is declared to be blcok-scoped with let. We can't use it out of the for block.
## Q6:
code returns an error because of reason similar with above. We can't use discountPrice out of the for block.
## Q7:
150 is printed as finalPrice is defined in the function block with let and thus is usable in the same level.
## Q8:
The function returns the array [ 50, 100, 150 ]. The 3 numbers is the value of finalPrice in each iteration of the for loop. The variable discounted is defined in the function block with let and thus is usable in the same level.
## Q9:
code returns an error as the let-declared i is not accessible out of the for block.
## Q10:
3 is printed as the length of the prices array we passed in as argument [ 100, 200, 300 ] is 3.
## Q11:
The function returns [ 50, 100, 150 ]. The 3 numbers is the value of discountedPrice in each iteration of the for loop. It's returned at the same block level as where its declared so no visibility error.
## Q12:
student.name  
student['Grad Year']   
student.greeting()  
student['Favorite Teacher'].name  
student.courseLoad[0]
## Q13:
### console.log('3'+ 2)  
32  
reason: 2 is converted to '2'  
### console.log('3'- 2)  
1  
reason: '3' is converted to 3    
### console.log(3+null)  
3  
reason:null is mapped to 0
### console.log('3'+ null)  
3null  
reason:null is converted to 'null'
### console.log(true + 3)  
4  
reason:true is mapped to 1
### console.log(false + true)  
1  
reason: false is mapped to 0 and true is mapped to 1
### console.log('3'+ undefined)  
3undefined  
reason:undefined is converted to 'undefined'
### console.log('3'- undefined)  
NaN  
reason: The operation '3'- undefined returns Not-A-Number.
## Q14:
### console.log('2'>1)
true  
reason: '2' is converted to 2
### console.log('2'<'12')
false  
reason: the strings are being compared alphabetically
### console.log(2=='2')
true  
reason: comparison with implicit type conversion. '2' is coverted to 2
### console.log(2==='2')
false  
reason: comparison without implicit type conversion. The types are different so false is returned
### console.log(true==2)
false  
reason:true is converted to 1
### console.log(true===Boolean(2))
true  
reason: Boolean(2) evaluates to true
## Q15:
== comparison allows implicit type conversion, and returns the result of comparing the converted (if needed) values of both sides. ===, by contrast, returns false if the 2 values aren't of the same type.
## Q16:
in part2-question16.js
## Q17:
The program will return the array newArr, which is euqal to [2,4,6]. Inside the for loop in modifyArray, doSomething is called on every element in array and appended to newArray. doSomething performs the doubling operation, so [2,4,6] is returned as we passed in [1,2,3].
## Q18:
in part2-question18.js
## Q19:
1
4
3
2

