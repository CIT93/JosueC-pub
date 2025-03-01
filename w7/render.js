const TBL = document.getElementById("tab-data")

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Total"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }
  
  function renderTbl(data){
    TBL.innerHTML = "";
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    data.forEach(function(obj){
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = obj.firstName;
      tr.appendChild(tdName);
      const tdTotal = document.createElement("td");
      tdTotal.textContent = obj.cfpTotal;
      tr.appendChild(tdTotal);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

  export {renderTbl, renderTblHeading};