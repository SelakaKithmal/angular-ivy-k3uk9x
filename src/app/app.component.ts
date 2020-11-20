import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  backendResponse = [
    { type: "ex1", color: "red", extratype: "x" },
    { type: "ex1", color: "yellow", extratype: "x" },
    { type: "ex1", color: "blue", extratype: "f" },
    { type: "ex1", color: "orange", extratype: "f" },
    { type: "ex2", color: "gray", extratype: "r" },
    { type: "ex2", color: "pink", extratype: "r" },
    { type: "ex2", color: "purlple", extratype: "v" },
    { type: "ex2", color: "green", extratype: "v" }
  ];

  results: any[] = [];

  types = ["ex1"];

  extratypes = ["x"];

  ngOnInit() {
    this.results = this.filterCode(this.backendResponse);
    this.results.filter(x => {
      x.type === this.types && x.extratypes == this.extratypes;
    });
    this.onchanging();
  }

  filterCode(res) {
    let filtered: any[] = [];
    res.forEach(val => {
      filtered.push(val);
    });
    return filtered;
  }

  onchanging() {
    let filterCondition = {
      extratype: this.extratypes[0],
      types: this.types[0]
    };
    console.log(filterCondition);
    this.results = this.backendResponse.filter(
      obj =>
        obj.extratype == filterCondition.extratype &&
        obj.type == filterCondition.types
    );
    console.log(this.results);
  }
}
