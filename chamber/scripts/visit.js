window.onload = function() {
    // Get the current date and time
    let currentDate = new Date();
  
    // Get the last visit date from local storage
    let lastVisit = localStorage.getItem('lastVisit');
  
    // If there was a last visit date
    if (lastVisit) {
      lastVisit = new Date(lastVisit);
  
      // Calculate the difference in days
      let diffDays = Math.round((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
  
      // Display the result somewhere in the page
      // Replace 'visitTime' with the actual ID of the element where you want to display the result
      document.getElementById('visitWord').innerHTML = `It's been ${diffDays} days since your last visit.`;
    } else {
      // If there's no last visit date in local storage, this is the user's first visit
      document.getElementById('visitWord').innerHTML = 'This is your first visit. Welcome!';
    }
  
    // Update the last visit date in local storage
    localStorage.setItem('lastVisit', currentDate.toString());
  }