'use client'
import { useState } from "react";

export default function Home() {

  const [list, setList] = useState(Array.from({ length: 5 }))

  const thStyle = "w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
  const tdStyle = "text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]"

  return (
    <section className="bg-white p-5">
      <h1 className="text-center text-blue-500 mt-5 font-bold text-5xl">
        Bienvenidos!!!
      </h1>
      <p className="mt-5 font-medium text-2xl">Revisen las ultimas alertas registradas.</p>
      <div className="max-w-full overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-600 text-center">
              <th className={thStyle}>
                ID
              </th>
              <th className={thStyle}>
                Date
              </th>
              <th className={thStyle}>
                ID Image
              </th>
              <th className={thStyle}>
                Message Alert
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((_, index) => (
              <tr key={index}>
                <td className={tdStyle}>
                  ID {index + 1}
                </td>
                <td className={tdStyle}>
                  {Date()}
                </td>
                <td className={tdStyle}>
                  IMAGE_{index}
                </td>
                <td className={tdStyle}>
                  This is the alert
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
