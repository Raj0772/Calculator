var equation;
            var answers=[],eq=[];
            var inputVal=document.querySelector("#screen");
            var questionInput=document.querySelector("#equation");
            var historyDiv=document.querySelector("#history");
            function calculate(val)
            {
                if(inputVal.value=="0")
                {
                    inputVal.value=val;
                }
                else
                {
                    inputVal.value+=val;
                }
                
            }
            function cleardisplay()
            {
                inputVal.value="0";
                questionInput.value="";
            }
            function equals()
            {
                equation=inputVal.value+ " = ";
                inputVal.value=eval(inputVal.value);
                questionInput.value=equation;
                answers.push(eval(inputVal.value));
                eq.push(equation);
                showHistory();
            }

            function showHistory()
            {
                var history="<div>";
                for(let i=0;i<eq.length;i++)
                {
                    history+="<div class='his'><p>"+eq[i]+""+answers[i]+"</p></div>";
                }
                history+="</div>";
                document.querySelector("#history").innerHTML=history;
            }

            function clearHistory()
            {
                const res=confirm(" Are You Sure want to delete history ? ");
                if(res)
                {
                    historyDiv.innerHTML="";
                    eq=[];
                    answers=[];
                }
            }