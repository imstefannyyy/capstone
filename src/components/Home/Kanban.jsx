import React from "react";
import { useNavigate } from 'react-router-dom';

function Kanban({ datas }) {
    const navigate = useNavigate();

    function handleDetails(code) {
        navigate(`/country/${code}`)
    }

    return (
        <div className="container-fluid px-lg-4 px-md-4 px-2 pt-3 d-flex flex-wrap">
            {datas && datas.map((data, index) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4 px-2" key={index} onClick={() => handleDetails(data.cca2)}>
                    <div className="card shadow-sm border-light rounded-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title mb-0">{data.name}</h5>
                            <span className="d-flex align-items-center">
                                <img
                                    src={data.flags.png}
                                    alt={`${data.name} flag`}
                                    style={{
                                        width: "30px",
                                        height: "20px",
                                        objectFit: "cover",
                                        marginRight: "5px",
                                    }}
                                    className="border-4"
                                />
                            </span>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                {data.coatOfArms && (
                                    <div className="col-3 d-flex justify-content-center">
                                        <img
                                            src={data.coatOfArms.png}
                                            alt={`${data.name} symbol`}
                                            style={{
                                            width: "50px",
                                            height: "50px",
                                            marginRight: "10px",
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="col-9">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="fw-bold">Capital</td>
                                                <td>:</td>
                                                <td className="w-75">{data.capital}</td>
                                            </tr>
                                            <tr>
                                            <   td className="fw-bold">Code</td>
                                                <td>:</td>
                                                <td className="w-75">{data.cca2}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Population</td>
                                                <td>:</td>
                                                <td className="w-75">{new Intl.NumberFormat("en-US").format(data.population)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-end">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Kanban;
