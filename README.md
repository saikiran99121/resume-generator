# resume-generator
#html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatiable" content="IE-edge" />
    <meta name="viewport" content="width=device-width, intial-scale=1.0"/>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
    crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css"/>

    <title>Resume Generator</title>
  </head>
  <body>
   
    
  <div class="container" id="cv-form">
    <h1 class="text-center my-2">Resume Generator</h1>
    <p class="text-center">Morapakula sai kiran</p>

    <div class="row">

      <div class="col-md-6">
          <!--frist col-->
          <h3>Personal Information</h3>
          <div class="form-group">
            <lable for="nameField">Your Name</lable>
            <input type="text" id="nameField"
            placeholder="Enter Here" class="form control">
          </div>
          
          <div class="form-group mt-2">
            <lable for="contactField">Your Contact</lable>
            <input type="text" id="contactField"
            placeholder="Enter Here" class="form control">
          </div>
          <div class="form-group mt-2">
            <lable for="addressField">Your Address</lable>
            <textarea type="text" id="addressField"
            placeholder="Enter Here" class="form control" >
            </textarea>
          </div>


          <p class="text-secondary my-3">Impotant Links</p>


          <div class="form-group mt-2">
            <lable for="fbField">Facebook </lable>
            <input type="text" id="fbField"
            placeholder="Enter Here" class="form control">
          </div>

          <div class="form-group mt-2">
            <lable for="instaField">Instagram</lable>
            <input type="text" id="instaField"
            placeholder="Enter Here" class="form control">
          </div>

          <div class="form-group mt-2">
            <lable for="linkedField">LinkedIn</lable>
            <input type="text" id="linkedField"
            placeholder="Enter Here" class="form control">
          </div>
      </div>
      <div class="col-md-6">
           <!--second col-->
          <h3>details</h3>
          <div class="form-group mt-2">
            <lable for=" ">Objective</lable>
            <textarea  id="objectiveField" rows="4" type="text" 
            placeholder="Enter Here" class="form control" ></textarea>
          </div>
          <div class="form-group mt-2" id="we" >
            <lable for=" ">Work Experience</lable>
            <textarea rows="3" type="text" 
            placeholder="Enter Here" class="form control  weField" ></textarea>



            <!-- new text area-->
           
            <div class="container text-center mt-2" id="weAddButton">
              <button onclick="addNewWEField()" class="btn btn-primary btn-sm">Add</button>
            </div>
          </div>


          <div class="form-group mt-2" id="aq">
            <lable for=" ">Academic Qualification</lable>
            <textarea type="text" 
            placeholder="Enter Here" class="form control  aqField" ></textarea>

            <div class="container text-center mt-2"id="aqAddButton">
              <button onclick="addNewAQField()" class="btn btn-primary btn-sm">Add</button>
            </div>
          </div>

          <div class="form-group mt-2" id="sk">
            <lable for=" ">Skills</lable>
            <textarea type="text" 
            placeholder="Enter Here" class="form control  skField" ></textarea>

            <div class="container text-center mt-2"id="skAddButton">
              <button onclick="addNewSKField()" class="btn btn-primary btn-sm">Add</button>
            </div>
          </div>

          <div class="form-group mt-2" id="achieve">
            <lable for=" ">Achievements</lable>
            <textarea type="text" 
            placeholder="Enter Here" class="form control  achieveField" ></textarea>

            <div class="container text-center mt-2"id="achieveAddButton">
              <button onclick="addNewAchieveField()" class="btn btn-primary btn-sm">Add</button>
            </div>
          </div>

      </div>
       
      <div class="container text-center mt-2">
        <button onclick="generateCV()"  class="btn-primary btn-lg">Genereate CV</button>
     

      </div>

    </div>
  </div>

  <div class="container" id="cv-template">
    <div class="row">
      <div class="col-md-4 text-center py-3 background">
        <!--first col-->
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqb3ItDuP92uCO-FMzeMoY9ulhtcRj97F35w&s" alt=""
        class="img-fluid myimg"/>
        <div class="container">
          <p id="nameT1">sai kiran</p>
          <p id="contactT">+9178643786,+91949842653</p>
          <P id="addressT">7-34 ,raveruipeta,vetapalem</P>
        </div>
        
        <p><a id="fbT" herf="#1">https://www.facebook.com/saikiran</a></p>

        <p><a id="InstaT" herf="#1">https://www.Instagram.com/saikiran</a></p>

        <p><a id="linkedT" herf="#1">https://www.LinkedIn.com/saikiran</a></p>

      </div>
      <div class="col-md-8 py-3">
        <!--second col-->
        <h1 id="nameT2" class="text-center" style="font-weight:800">SAI KIRAN MORAPAKULA
        </h1>
        <!-- objective card-->
        <div class="card mt-3">
          <div class="card-header background">
            <h3>Objective</h3>
          </div>
          <div class="card-body">
            <p id="objectiveT">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magnam assumenda animi aspernatur 
              ducimus eligendi blanditiis dolorum ipsa nostrum minima aut ipsum iusto inventore minus?</p>
          </div>
        </div>
        <!--Work expreince-->
        <div class="card mt-3">
          <div class="card-header background">
            <h3>Work Exprerience</h3>
          </div>
          <div class="card-body">
            <ul id="weT">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
            </ul>
          </div>
        </div>
        <!--academic Qualification-->
        <div class="card mt-3">
          <div class="card-header background">
            <h3>Academic Qualification</h3>
          </div>
          <div class="card-body">
            <ul id="aqT">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
            </ul>
          </div>
        </div>
         <!--skills-->
        <div class="card mt-3">
          <div class="card-header background">
            <h3>Skills</h3>
          </div>
          <div class="card-body">
            <ul id="skillsT">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
            </ul>
          </div>
        </div>
          <!--Acheivements-->
        <div class="card mt-3">
          <div class="card-header background">
            <h3>Achievements</h3>
          </div>
          <div class="card-body">
            <ul id="achieveT">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, delectus.</li>
            </ul>
          </div>
        </div>

        <div class="container mt-4 text-center">
          <button onclick="printCV()" class="btn background">Print CV</button>
        </div>
      </div>
    </div>
  </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
    crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
</html>
