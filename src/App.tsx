import { useState } from "react";
import "./App.css";
import { Grid } from "./Components/grid";
// import { Uploader} from "building-blocks";
import data from "./data/data.json";
import { Uploader } from "./Components/upload";
import { invoke } from '@tauri-apps/api'

function App() {
  // State to store DataSource
  const [dataSource, setDataSource] = useState(data);

  const [files, setFiles] = useState<any[]>([]);

  console.log(files);

  invoke('greet', { name: 'World' })
  .then((response) => console.log(response))

  const handleFilesChange = (newFiles: any[]) => {
    setFiles(newFiles);
  };

  const handleOnchange = (event: any, props: any) => {
    const newData = [...dataSource];
    const itemIndex = newData.findIndex(
      (item) => item.OrderID === props.OrderID
    );
    newData[itemIndex].Freight = event.target.value;

    // console.log(newData);
    setDataSource(newData);
  };

  // Custom Grid Component
  const gridTemplate = (props: any) => {
    const val = props.Freight;
    return (
      <div>
        <input
          defaultValue={val}
          onBlur={(event) => handleOnchange(event, props)}
        />
      </div>
    );
  };

  // Grid
  const columns = [
    { field: "OrderID", width: "200", textAlign: "Right" },
    { field: "CustomerID", width: "100" },
    { field: "EmployeeID", width: "100", textAlign: "Right" },
    {
      field: "Freight",
      headerText: "Frieght",
      width: "200",
      template: gridTemplate,
    },
    { field: "ShipCountry", width: "200" },
    { field: "ShipAddress", width: "150" },
  ];

  const fileTypes = [".exe"];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(dataSource);
  };

  return (
    <div className="App">
      <div>
        <h2 style={{ color: "#e3165b" }}>Custom Npm Package</h2>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="column">
                <Grid
                  pageSize={6} // Page Size for Grid
                  dataSource={dataSource}
                  allowPaging={true}
                  columns={columns}
                  // columnName={"ShipCountry"} // Column Name for custom component
                />
              </div>
              <div className="column">
                <Uploader onFilesChange={handleFilesChange} fileCount={2} fileTypes={fileTypes}></Uploader>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
