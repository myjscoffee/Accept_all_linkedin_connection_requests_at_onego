//Get all Accept Buttons by using the class name
const acceptButtons= document.getElementsByClassName('invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view'); 
//iterate and click on each button
acceptButtons.forEach(btn=>{
                            btn.click();
                      });
