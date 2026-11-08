// mobile menu
function toggleMenu() {
  var menu = document.getElementById("main-menu");
  if (menu.className === "") {
    menu.className = "show";
  } else {
    menu.className = "";
  }
}

// form validation
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var trip = document.getElementById("trip").value;
  var people = document.getElementById("people").value;
  var isValid = true;

  // clear old errors
  document.getElementById("err-name").innerHTML = "";
  document.getElementById("err-email").innerHTML = "";
  document.getElementById("err-phone").innerHTML = "";
  document.getElementById("err-date").innerHTML = "";
  document.getElementById("err-trip").innerHTML = "";
  document.getElementById("err-people").innerHTML = "";

  if (name == "" || name.length < 3) {
    document.getElementById("err-name").innerHTML = " * Please enter your full name";
    isValid = false;
  }

  if (email == "") {
    document.getElementById("err-email").innerHTML = " * Please fill the email field";
    isValid = false;
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    document.getElementById("err-email").innerHTML = " * Please enter a valid email";
    isValid = false;
  }

  if (phone == "" || phone.length < 7) {
    document.getElementById("err-phone").innerHTML = " * Please enter a valid phone number";
    isValid = false;
  }

  if (date == "") {
    document.getElementById("err-date").innerHTML = " * Please choose a date";
    isValid = false;
  }

  if (trip == "") {
    document.getElementById("err-trip").innerHTML = " * Please select a trip type";
    isValid = false;
  }

  if (people == "" || people < 1 || people > 6) {
    document.getElementById("err-people").innerHTML = " * Number of people must be between 1 to 6";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("success-msg").style.display = "block";
    document.getElementById("booking-form").reset();
    return false;
  }

  return false;
}

// gallery expand
function showImage(img) {
  var big = document.getElementById("expandedImg");
  var text = document.getElementById("imgText");
  big.src = img.src;
  big.style.display = "block";
  text.innerHTML = img.alt;
  document.getElementById("imgContainer").style.display = "block";
}

function closeImage() {
  document.getElementById("imgContainer").style.display = "none";
}

// Slideshow
var slideshowImages = document.querySelectorAll(".slideshow img");
if (slideshowImages.length > 0) {
  var nextImageDelay = 3000;
  var currentImageCounter = 0;
  slideshowImages[currentImageCounter].style.opacity = 1;

  setInterval(nextImage, nextImageDelay);

  function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
  }
}
