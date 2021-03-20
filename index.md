<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2020463- Shahzaib, Muhammad Ali</title>
    <link rel="icon" href="src/img/ref.png" type="image/icon type">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="src/css/style.css" rel="stylesheet">
</head>

<body>
    
    <!--Navigatiov Section-->
    <nav id="mynav" class="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><span class="ml-3"><i style="font-size: 3rem;"
                    class="fab fa-html5"></i></span></a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul id="mylist" class="ml-auto navbar-nav mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="linkhtml" href="html.html">Html</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="linkcss" href="css.html">CSS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="linkjs" href="js.html">Javascript</a>
                </li>

            </ul>

        </div>
    </nav>
    <div class="divider"></div>
    <!--Navigatiov Section ends-->


    <div class="jumbotron">
        <div class="card-overlay">

            <!--anim class for animating on page load sourced from https://www.geeksforgeeks.org/how-to-create-fade-in-effect-on-page-load-using-css/ FOR ANIMATION-->

            <div style="padding-top: 28vh;" class="anim text-white text-center col-lg-12">
                <h1>Continuous Assesment 1</h1>
                <h2>Client Side Programming
                    <hr>
                </h2>
                <h3>Muhammad Ali Shahzaib</h3>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row pb-3">
            <div class="col-12 text-center">
                <h1 class="pt-5">Assignment <strong>Descriptor</strong>
                    <hr>
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <!--used iframe from google docs web publishing tools-->
                <!--How to embed google docs to your website sourced from https://wcmshelp.ucsc.edu/advanced/embedding-google/index.html-->
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                        src="https://docs.google.com/document/d/e/2PACX-1vRhtUVvYGQyxIhSY0f9SgEEl-kzNRBuyvEghPVMysLvH1bZqc3J1zG6khXigyHnvc52NgD82OSYtiFB/pub?embedded=true"
                        height="1380" width="1024"></iframe>
                </div>
            </div>

        </div><hr>
         <!--View source button sourced from 
    https://stackoverflow.com/questions/41945094/add-option-to-view-source-of-current-html-page -->
        <div class="row mt-5 mb-2">
        <div class="col-12 text-center">
            <button class="btn btn-primary" type ="button" onclick="viewSource()">View Page HTML</button>
        </div>            
        </div>




    </div>
    <div class="footer fixed pt-sm-2 pt-md-4 pt-lg-5">
        <div style="height: inherit;" class="row bg-dark mx-auto">
            <div class="col-lg-10 col-md-8 col-sm-9 footer-txt">
                <ul>
                    <li style="font-size: 1.2rem;">Quick Links:</li>
                    <li><a href="html.html">Html</a></li>
                    <li><a href="css.html">CSS</a></li>
                    <li><a href="js.html">Javascript</a></li>
                    <p class="mt-sm-1  mt-lg-4">Created by <span class="text-white">Muhammad Ali Shahzaib</span> 2020463<a style="font-size: 25px;" href="https://github.com/imM-Ali/imM-Ali.github.io" class="ml-1 text-secondary fab fa-github"></a></p>
                </ul>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-3 d-lg-block d-md-block d-none ml-auto footer-img">
                <i style="font-size: 10rem;" class="text-secondary fab fa-html5"></i>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    

    <!--Works but not included in final submission because navigation refuses to work-->
    <!--All html pages could be loaded on the same page through this javascript rather than loading as a seperate page-->
    <!--https://stackoverflow.com/questions/15808348/change-html-code-without-refreshing-the-page-->

</body>

</html>