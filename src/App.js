import Expenses from './components/Expenses';

function App() {
  const expenses = [ 
    {id: "e1",
    title: "smart car",
    amount: 50,
    date: new Date(2020, 7, 14),
  },
  {id: "e2",
  title: "bag of bums",
  amount: 245.99,
  date: new Date(2021, 5, 11),
},
{id: "e3",
title: "banana",
amount: 30000,
date: new Date(2022, 4, 20),
},
{id: "e4",
title: "volcano",
amount: 12,
date: new Date(2020, 7, 13),
},

  ]
  return (
    <div>
      <h2>Bums bums bUmZ!</h2>
      <Expenses
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      />
      <Expenses
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
      <Expenses
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
      <Expenses
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      />
    </div>
  );
}

export default App;
