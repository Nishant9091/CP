import React, { useState } from 'react';
import "./Form.css";


const MyComponent = () => {
  const [selectedValues, setSelectedValues] = useState(['', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '',]);

  const selectElements = [
    { id: 'laptop-type', label: 'Usage', options: ['-- Please Select --', 'Workstation', 'Server'] },
    { id: 'gpu', label: 'Build', options: ['-- Please Select --', 'By software Specification', 'Custom'] },
    { id: 'nvidia-model', label: 'Software', options: ['-- Please Select --', 'Ansys', 'Autodesk Maya 3D', 'Autocad'] },
    { id: 'amd-model', label: 'Processor Brand', options: ['-- Please Select --', 'Intel', 'AMD'] },
    { id: 'ram', label: 'Processor', options: ['-- Please Select --', 'intel core i5', 'intel core i7', 'intel core i9', 'intel Xeon silver', 'intel Xeon Gold'] },
    { id: 'storage-type', label: 'MotherBoard Brand', options: ['-- Please Select --', 'Asus', 'Asrock', 'Gigabyte', 'MSI', 'Nzxt'] },
    { id: 'storage-capacity', label: 'MotherBoard Model', options: ['-- Please Select --', 'H410', 'H610', 'Z690', 'Z790'] },
    { id: 'screen-size', label: 'Graphics Card', options: ['-- Please Select --', 'Asus', 'Galax', 'MSI', 'None'] },
    { id: 'keyboard-type', label: 'Graphic card Model', options: ['-- Please Select --', 'GTX 1650 4GB', 'RTX 3050 8GB', 'RTX 4090 24GB'] },
    { id: 'battery-life', label: 'RAM', options: ['-- Please Select --', 'Corsair', 'G.skill', 'XPG'] },
    { id: 'ram-model', label: 'RAM Model', options: ['-- Please Select --', '32GB', '64GB', '128GB'] },
    { id: 'storage', label: 'Storage', options: ['-- Please Select --', 'Primary storage', 'Secondry storage'] },
    { id: 'primary-storage', label: 'Primary Storage', options: ['-- Please Select --', 'SSD', 'HDD'] },
    { id: 'secondary-storage', label: 'Seconday Storage', options: ['-- Please Select --', 'SSD', 'HDD'] },
    { id: 'ssd', label: 'SSD', options: ['-- Please Select --', 'Adata', 'Kingstone', 'Samsung', 'WD'] },
    { id: 'ssd-capacity', label: 'SSD capacity', options: ['-- Please Select --', '512GB', '1TB', '2TB', '4TB'] },
    { id: 'hdd', label: 'HDD', options: ['-- Please Select --', 'Seagate', 'WD'] },
    { id: 'hdd-capacity', label: 'HDD capacity', options: ['-- Please Select --', '1TB', '2TB', '4TB', '8TB'] },
    { id: 'cpu-cooler', label: 'CPU cooler', options: ['-- Please Select --', 'Air Cooler', 'Liquid Cooler'] },
    { id: 'air-cooler', label: 'Air Cooler', options: ['-- Please Select --', 'Cooler master', 'Deep cool', 'NZXT'] },
    { id: 'cooler-master', label: 'Cooler master', options: ['-- Please Select --', 'HYPER 212', 'HYPER 612', 'NH P1', 'T120'] },
    { id: 'deep-cool', label: 'Deep cool', options: ['-- Please Select --', 'HYPER 212', 'HYPER 612', 'NH P1', 'T120'] },
    { id: 'nzxt', label: 'NZXT', options: ['-- Please Select --', 'HYPER 212', 'HYPER 612', 'NH P1', 'T120'] },
    { id: 'liquid-cooler', label: 'Liquid Cooler', options: ['-- Please Select --', 'Antec', 'Asus', 'Galax'] },
    { id: 'antec', label: 'Antec', options: ['-- Please Select --', 'HYDRO VORTEX 360', 'Master Liquid ML360', 'ROG Strix LZ360'] },
    { id: 'galax', label: 'Galax', options: ['-- Please Select --', 'HYDRO VORTEX 360', 'Master Liquid ML360', 'ROG Strix LZ360'] },
    { id: 'asus', label: 'Asus', options: ['-- Please Select --', 'HYDRO VORTEX 360', 'Master Liquid ML360', 'ROG Strix LZ360'] },
    { id: 'custom-mods', label: 'Custom Mods', options: ['-- Please Select --', 'Not Required', 'Cooler master 120mnrgb fan', 'Deep Cool 120mnrgb fan'] },
    { id: 'os', label: 'Operating System', options: ['-- Please Select --', 'Windows 10/11 trial', 'Windows 10 Licence', 'Windows 11 Licence', 'Windows Server 2022 standard', 'Windows Server 2022 Data Center'] },
  
  ];

  const handleSelectChange = (index, event) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);
  };

  return (
    <div className="container mt-5">
      <form id="customization-form">
        {selectElements.map((element, index) => (
          <div key={element.id} className="form-part">
            <div className="form-group" style={{ display: index === 0 || selectedValues[index - 1] !== '' ? 'block' : 'none'    }}>
              <label htmlFor={element.id}>
                {element.label}
                <em style={{ color: 'red' }}>*</em>
              </label>
              <select
                id={element.id}
                name={element.id}
                className="form-control"
                value={selectedValues[index]}
                onChange={(event) => handleSelectChange(index, event)}
              >
                {element.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default MyComponent;
