
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

console.log('Tabs:', tabs);
console.log('Tab contents:', tabContents);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    console.log('Active Tab Target:', target);
    
    if (!target) {
    console.error("Error: Tab target not found:", target);
    return;
    }
    
    // Clear active content from all tabs
    tabContents.forEach(tabContent => {

    if (target) {
      console.error("Error: No active content found:", target);  
      return;
    }

    tabContent.classList.remove('active')
     })

    tabs.forEach(tab => { 
      if (!target) {
        console.error("Error: Tabs not removed:", target);
        return;
       }
      		       
          })
          
        tab.classList.add('active')
    target.classList.add('active') 
})
})
