import Volver from "./Volver"
import { useState, useEffect } from "react";

function Tickets() {

    const [tickets, setTickets] = useState([])

    const getTickets = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setTickets(myJson)
            });
    }

    useEffect(() => {

        getTickets()

    }, [])


    return (
        <>
            <div id="volver"><Volver /></div>
            <div className="tickets">
                <h2 >Tickets</h2>
                <hr />
                {
                    tickets.map(t => (
                        <div key={t.ticketId}>
                            <div className="row">
                                <div className="col-3 from">De: {t.from} </div>
                                <div className="col-3 offset-4 date text-right">Enviado: {t.date.slice(0, -4)}</div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="row">

                                        <div className="col-12 ">
                                            {t.status === "NEW" ?
                                                <div className="subject d-inline-block"> <h5 className="nuevo">NUEVO</h5>{t.subject}</div>
                                                : <div className="subject d-inline-block"> <h5 className="respondido">RESPONDIDO</h5>{t.subject}</div>
                                            }
                                        </div>

                                        <div className="col-11">{t.body}</div>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="flechaD"></div>
                                </div>
                            </div>
                            <hr />
                        </div>

                    ))
                }

            </div>
            
            <figure>
                <img  src="tiendamiaLogo.png" alt="Logo de TiendaMia" />
            </figure>
            

        </>
    )
}

export default Tickets
