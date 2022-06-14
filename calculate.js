let grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 
     49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
        
        let maxRange = "";
        let Apls_Range = "";
        let A_Range = "";
        let Amin_Range = "";
        let Bpls_Range = "";
        let B_Range = "";
        let Bmin_Range = "";
        let Cpls_Range = "";
        let C_Range = "";
        let Cmin_Range = "";
        let D_Range = "";
        let F_Range = "";

        let Max = document.getElementById("Max_grade").value;
        let APlus = document.getElementById("Apls_grade").value;
        let A = document.getElementById("A_grade").value;
        let AMinus = document.getElementById("Amin_grade").value;
        let BPlus = document.getElementById("Bpls_grade").value;
        let B = document.getElementById("B_grade").value;
        let BMinus = document.getElementById("Bmin_grade").value;
        let CPlus = document.getElementById("Cpls_grade").value;
        let C = document.getElementById("C_grade").value;
        let CMinus = document.getElementById("Cmin_grade").value;
        let D = document.getElementById("D_grade").value;
        let F = document.getElementById("F_grade").value;

    
    window.onload = function() {
        
        APlus = document.getElementById("Apls_grade").value;
        A = document.getElementById("A_grade").value;
        AMinus = document.getElementById("Amin_grade").value;
        BPlus = document.getElementById("Bpls_grade").value;
        B = document.getElementById("B_grade").value;
        BMinus = document.getElementById("Bmin_grade").value;
        CPlus = document.getElementById("Cpls_grade").value;
        C = document.getElementById("C_grade").value;
        CMinus = document.getElementById("Cmin_grade").value;
        D = document.getElementById("D_grade").value;
        F = document.getElementById("F_grade").value;
   
   
        APlus = parseFloat(APlus);
        A = parseFloat(A);
        AMinus = parseFloat(AMinus);
        BPlus = parseFloat(BPlus);
        B = parseFloat(B);
        BMinus = parseFloat(BMinus);
        CPlus = parseFloat(CPlus);
        C = parseFloat(C);
        CMinus = parseFloat(CMinus);
        D = parseFloat(D);
   
        for (let i=0; i< grades.length ;i++)
        {
            if (grades[i] >= APlus){
                Apls_Range = Apls_Range + "O";
            }else if (grades[i] >= A){
                A_Range = A_Range + "O";
            }else if (grades[i] >= AMinus){
                Amin_Range = Amin_Range + "O";
            }else if (grades[i] >= BPlus){
                Bpls_Range = Bpls_Range + "O";
            }else if (grades[i] >= B){
                B_Range = B_Range + "O";
            }else if (grades[i] >= BMinus){
                Bmin_Range = Bmin_Range + "O";
            }else if (grades[i] >= CPlus){
                Cpls_Range = Cpls_Range + "O";
            }else if (grades[i] >= C){
                C_Range = C_Range + "O";
            }else if (grades[i] >= CMinus){
                Cmin_Range = Cmin_Range + "O";
            }else if (grades[i] >= D){
                D_Range = D_Range + "O";
            }else if (grades[i] >= F){
                F_Range = F_Range + "O";
            }
        } 
        printAll();

    };


    function printAll(){
        document.getElementById("Ap0").innerHTML= Apls_Range;
        document.getElementById("A0").innerHTML= A_Range;
        document.getElementById("Am0").innerHTML= Amin_Range;
        document.getElementById("Bp0").innerHTML= Bpls_Range;
        document.getElementById("B0").innerHTML= B_Range;
        document.getElementById("Bm0").innerHTML= Bmin_Range;
        document.getElementById("Cp0").innerHTML= Cpls_Range;
        document.getElementById("C0").innerHTML= C_Range;
        document.getElementById("Cm0").innerHTML= Cmin_Range;
        document.getElementById("D0").innerHTML= D_Range;
        document.getElementById("F0").innerHTML= F_Range;
    }
    


    
    function dynamic_changeMAX(){
        dispO();

    }

    function dynamic_changeAP(){
        dispO();
    }

    function dynamic_changeA(){
        dispO();
    }

    function dynamic_changeAM(){
        dispO();
    }

    function dynamic_changeBP(){
        dispO();
    }

    function dynamic_changeB(){
        dispO();
    }

    function dynamic_changeBM(){
        dispO();
    }

    function dynamic_changeCP(){
        dispO();
    }

    function dynamic_changeC(){
        dispO();
    }

    function dynamic_changeCM(){
       dispO();
    }

    function dynamic_changeD(){
         dispO();
    }

    function dynamic_changeF(){
        dispO();
    }

    

    let input = document.getElementById('grade');
    const btn = document.getElementById('NG-btn');

    input.addEventListener("keyup", e =>{
        e.preventDefault();
        if(e.key === 'Enter'){
            AddGrade();
            input.value='';
        }
    })
    btn.addEventListener('click', AddGrade);
        
    const error = document.getElementById("msg");
    function errorfn(){
        error.innerHTML="<--- Overlapping of grades is not allowed, as you continue please assure the Lower bounds boxes are filled in descending value"
   
    //window.alert("invalid value encountered. overlapping of grades is not allowed, to continue please assure the boxes are filled in descending order");
}

function dispO(){
    Max = document.getElementById("Max_grade").value;
    APlus = document.getElementById("Apls_grade").value;
    A = document.getElementById("A_grade").value;
    AMinus = document.getElementById("Amin_grade").value;
    BPlus = document.getElementById("Bpls_grade").value;
    B = document.getElementById("B_grade").value;
    BMinus = document.getElementById("Bmin_grade").value;
    CPlus = document.getElementById("Cpls_grade").value;
    C = document.getElementById("C_grade").value;
    CMinus = document.getElementById("Cmin_grade").value;
    D = document.getElementById("D_grade").value;
    F = document.getElementById("F_grade").value;


    Max = parseFloat(Max);
    APlus = parseFloat(APlus);
    A = parseFloat(A);
    AMinus = parseFloat(AMinus);
    BPlus = parseFloat(BPlus);
    B = parseFloat(B);
    BMinus = parseFloat(BMinus);
    CPlus = parseFloat(CPlus);
    C = parseFloat(C);
    CMinus = parseFloat(CMinus);
    D = parseFloat(D);
    F = parseFloat(F);
                    
    maxRange = "";
    Apls_Range = "";
    A_Range = "";
    Amin_Range = "";
    Bpls_Range = "";
    B_Range = "";
    Bmin_Range = "";
    Cpls_Range = "";
    C_Range = "";
    Cmin_Range = "";
    D_Range = "";
    F_Range = "";

    if(Max < APlus ){
        errorfn();
    }else if(APlus < A ){
        errorfn();
    }else if(A < AMinus ){
        errorfn();
    }else if(AMinus < BPlus ){
        errorfn();
    }else if(BPlus < B ){
        errorfn();
    }else if(B < BMinus ){
        errorfn();
    }else if(BMinus < CPlus ){
        errorfn();
    }else if(CPlus < C ){
        errorfn();
    }else if(C < CMinus ){
        errorfn();
    }else if(CMinus < D ){
        errorfn();
    }else if(D < F ){
        errorfn();
    }else{ 
    
        for (let i=0; i<grades.length ;i++)
        {
            if (grades[i] >= APlus){
                Apls_Range = Apls_Range + "O";
            }else if (grades[i] >= A){
                A_Range = A_Range + "O";
            }else if (grades[i] >= AMinus){
                Amin_Range = Amin_Range + "O";
            }else if (grades[i] >= BPlus){
                Bpls_Range = Bpls_Range + "O";
            }else if (grades[i] >= B){
                B_Range = B_Range + "O";
            }else if (grades[i] >= BMinus){
                Bmin_Range = Bmin_Range + "O";
            }else if (grades[i] >= CPlus){
                Cpls_Range = Cpls_Range + "O";
            }else if (grades[i] >= C){
                C_Range = C_Range + "O";
            }else if (grades[i] >= CMinus){
                Cmin_Range = Cmin_Range + "O";
            }else if (grades[i] >= D){
                D_Range = D_Range + "O";
            }else if (grades[i] >= F){
                F_Range = F_Range + "O";
            }
        }  
        
        printAll();
        }
}
            

function AddGrade(e){
    let newGrade = document.getElementById("grade").value;
    Max = document.getElementById("Max_grade").value;
    F = document.getElementById("F_grade").value;

    newGrade = parseFloat(newGrade);
    Max = parseFloat(Max);
    F = parseFloat(F);



    if(newGrade === '' || newGrade > Max || newGrade < F){
        window.alert("invalid value entered. please enter a number between the value of F and Max");
        input.value='';
    }else{

        if(newGrade <= Max && newGrade >= F){ 

            APlus = document.getElementById("Apls_grade").value;
            A = document.getElementById("A_grade").value;
            AMinus = document.getElementById("Amin_grade").value;
            BPlus = document.getElementById("Bpls_grade").value;
            B = document.getElementById("B_grade").value;
            BMinus = document.getElementById("Bmin_grade").value;
            CPlus = document.getElementById("Cpls_grade").value;
            C = document.getElementById("C_grade").value;
            CMinus = document.getElementById("Cmin_grade").value;
            D = document.getElementById("D_grade").value;

            APlus = parseFloat(APlus);
            A = parseFloat(A);
            AMinus = parseFloat(AMinus);
            BPlus = parseFloat(BPlus);
            B = parseFloat(B);
            BMinus = parseFloat(BMinus);
            CPlus = parseFloat(CPlus);
            C = parseFloat(C);
            CMinus = parseFloat(CMinus);
            D = parseFloat(D);
            grades.push(newGrade);               


            maxRange = "";
            Apls_Range = "";
            A_Range = "";
            Amin_Range = "";
            Bpls_Range = "";
            B_Range = "";
            Bmin_Range = "";
            Cpls_Range = "";
            C_Range = "";
            Cmin_Range = "";
            D_Range = "";
            F_Range = "";

            for (let i=0; i<grades.length ;i++)
            {
                if (grades[i] >= APlus){
                    Apls_Range = Apls_Range + "O";
                }else if (grades[i] >= A){
                    A_Range = A_Range + "O";
                }else if (grades[i] >= AMinus){
                    Amin_Range = Amin_Range + "O";
                }else if (grades[i] >= BPlus){
                    Bpls_Range = Bpls_Range + "O";
                }else if (grades[i] >= B){
                    B_Range = B_Range + "O";
                }else if (grades[i] >= BMinus){
                    Bmin_Range = Bmin_Range + "O";
                }else if (grades[i] >= CPlus){
                    Cpls_Range = Cpls_Range + "O";
                }else if (grades[i] >= C){
                    C_Range = C_Range + "O";
                }else if (grades[i] >= CMinus){
                    Cmin_Range = Cmin_Range + "O";
                }else if (grades[i] >= D){
                    D_Range = D_Range + "O";
                }else if (grades[i] >= F){
                    F_Range = F_Range + "O";
                }
            }  

        }
    printAll();
    
    }
}


















