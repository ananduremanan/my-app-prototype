import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt+QHJqVEZrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlthSn5VdkZnWXZWdnI=;Mgo+DSMBPh8sVXJ1S0R+XVFPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXhRdUVlWXxacXRVRWY=;ORg4AjUWIQA/Gnt2VFhiQlBEfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5VdEZjX39ddHVVR2ha;MjUwMDYyNkAzMjMxMmUzMDJlMzBUNmk0RnN2U2dJWXllN0EzdDZlVlVCVmovMGg5UUFPOFdKNURBTFN4eUdnPQ==;MjUwMDYyN0AzMjMxMmUzMDJlMzBpbnJETmJ0YXJBVWhJVmt6QnhsK2FuVW4rSWVmdi9Kcjl3TzRPVlVrRWdnPQ==;NRAiBiAaIQQuGjN/V0d+Xk9FdlRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TcEdgWXlec3BUR2BZVw==;MjUwMDYyOUAzMjMxMmUzMDJlMzBiemRYeXBqcGxRUGVGRERmNnk4VzM4RmhTVUU4ZkVmRUdVRUNjVnoxRm9jPQ==;MjUwMDYzMEAzMjMxMmUzMDJlMzBmWFU4TFJVLzdhZDdIZ09ucXVvY0dzUWpKSFV6MHR4anRTcmFrVVcrblh3PQ==;Mgo+DSMBMAY9C3t2VFhiQlBEfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5VdEZjX39ddHVUT2lV;MjUwMDYzMkAzMjMxMmUzMDJlMzBqUUVpbzExdnlGMVJOcU81bFFsUERKRjRjLzkrbVBob3oxZzNRMzVRTmlRPQ==;MjUwMDYzM0AzMjMxMmUzMDJlMzBJd1RKOU0xeWZ4R3RuUGFsRExuK21FcUNMUlM0NW1kVXNaWmp6SjVrYm1nPQ==;MjUwMDYzNEAzMjMxMmUzMDJlMzBiemRYeXBqcGxRUGVGRERmNnk4VzM4RmhTVUU4ZkVmRUdVRUNjVnoxRm9jPQ=="
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
