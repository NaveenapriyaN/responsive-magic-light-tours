function execute() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phoneNumber = document.getElementById("Number").value;

    // Retrieve existing data from local storage
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Check if the email already exists in local storage
    var emailExists = existingData.some(function(item) {
        return item.email === email;
    });

    if (emailExists) {
        alert("Email is already registered for Magical Tours.");
        return;
    }
    else{
        alert("You Booked for Magical Light Tours");
    }

    // Update the data with new values
    var newData = {
        uid: name,
        email: email,
        number: phoneNumber
    };

    // Add the new data to the existing data
    existingData.push(newData);

    // Store the updated data back in local storage
    localStorage.setItem("userData", JSON.stringify(existingData));
}

 
 
 
 // JavaScript for the slider
 const slider = document.querySelector('.slider');
 const images = document.querySelectorAll('.slider img');
 const intervalTime = 4000; // Time between slide transitions

 let imageIndex = 0;
 let timer;

 const startSlider = () => {
   timer = setInterval(nextImage, intervalTime);
 };

 const stopSlider = () => {
   clearInterval(timer);
 };

 const showImage = (index) => {
   // Remove the 'active' class from all images
   images.forEach((image) => {
     image.classList.remove('active');
   });

   // Add the 'active' class to the specified image
   images[index].classList.add('active');
 };

 const previousImage = () => {
   imageIndex = (imageIndex - 1 + images.length) % images.length;
   showImage(imageIndex);
 };

 const nextImage = () => {
   imageIndex = (imageIndex + 1) % images.length;
   showImage(imageIndex);
 };

 // Set initial image
 showImage(imageIndex);

 // Start the slider
 startSlider();

 // Pause the slider on mouseenter and resume on mouseleave
 slider.addEventListener('mouseenter', stopSlider);
 slider.addEventListener('mouseleave', startSlider);