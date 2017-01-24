//import Promise from 'bluebird';

function DataService() {
  let data = [];

  function createData() {
      data = [{
      id: 1,
      User_id: "Prabhakar Venkatesan",
      email: "pravenka@in.ibm.com",
      role:"Admin"
    },{
      id: 2,
      User_id: "Joshep Kuruvilla",
      email: "Joshepkv@in.ibm.com",
      role:"Tester"
  },{
      id: 3,
      User_id: "Joshep Kuruvilla",
      email: "Joshepkv@in.ibm.com",
      role:"Tester"
  },{
      id: 4,
      User_id: "Joshep Kuruvilla",
      email: "Joshepkv@in.ibm.com",
      role:"Tester"
  }
  ];
      return data;
  }
  data = createData();

  this.delete = function(selection) {
    let newData = [];
    data.forEach(function (row) {
      if (!selection[row.id]) {
        newData.push(row);
      }
    });
    data = newData;
  }

  this.sort = function (col, dir) {
    if (col === 'rand') {
      data.sort(function (first, second) {
        if (dir === 'asc') {
          return first.rand - second.rand;
        }
        else if (dir === 'desc') {
          return second.rand - first.rand;
        }
        else {
          return first.id - second.id;
        }
      });
    }
    return data;
  };

  this.getData = function () {
    return data;
  };
}

const dataService = new DataService();

export { dataService };
