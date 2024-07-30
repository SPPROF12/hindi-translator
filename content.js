chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'TRACKING_INFO') {
      displayTrackingInfo(request);
    }
  });
  
  function displayTrackingInfo(info) {
    let sidebar = document.getElementById('tracking-sidebar');
    
    if (!sidebar) {
      sidebar = document.createElement('div');
      sidebar.id = 'tracking-sidebar';
      document.body.appendChild(sidebar);
      
      const style = document.createElement('style');
      style.textContent = `
        #tracking-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100%;
          background: white;
          border-left: 1px solid #ccc;
          z-index: 10000;
          overflow-y: auto;
          padding: 10px;
          box-shadow: -2px 0 5px rgba(0,0,0,0.1);
        }
      `;
      document.head.appendChild(style);
    }
    
    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = `
      <strong>URL:</strong> ${info.url}<br>
      <strong>Initiator:</strong> ${info.initiator}<br>
      <strong>Method:</strong> ${info.method}<br>
      <hr>
    `;
    sidebar.appendChild(infoDiv);
  }
  