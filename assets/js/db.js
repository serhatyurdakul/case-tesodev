fetch("../../data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    if (JSON.parse(localStorage.getItem("combinedData"))?.length > 0) {
      return;
    }
    const combinedData = jsonData.data.map((row) => {
      const rowData = {};
      for (let i = 0; i < jsonData.cols.length; i++) {
        rowData[jsonData.cols[i]] = row[i];
      }
      return rowData;
    });

    const combinedDataString = JSON.stringify(combinedData);
    localStorage.setItem("combinedData", combinedDataString);
  })
  .catch((error) => console.error(error));
