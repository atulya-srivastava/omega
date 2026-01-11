function Overview() {

const details = [
  { label: "Model Year", value: 2021 },
  { label: "Mileage", value: "18.5 km/l" },
  { label: "Price", value: "Rs. 675000" },
  { label: "Fuel Type", value: "Diesel" },
  { label: "Transmission", value: "Manual" }
];


// chunk array
const chunckArray = (arr: any[], number: number): any[] =>{
    const res = [];
    for(let i=0;i<arr.length;i+=number){
        res.push(arr.slice(i,i+number));
    }
    return res;
}

const rows = chunckArray(details,3)
return (
    <div className="w-full">
        <p className="text-violet-900 text-md font-bold px-2">
          Car Overview
        </p>
          <div className='w-full p-4 border-2 border-gray-500/40 rounded-xl'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
        
            <div className="grid grid-cols-3 gap-x-20 ">
              {row.map((item:any, itemIndex:number) => (
                <div
                  className="flex flex-col justify-center"
                  key={itemIndex}
                >
                  <span className="text-md font-bold text-black/60">
                    {item.label}
                  </span>
                  <span className="text-purple-950 font-bold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {rowIndex !== rows.length - 1 && (
              <hr className="my-3 border-gray-200" />
            )}
          </div>
        ))}
          </div>
    </div>
);
}

export default Overview
