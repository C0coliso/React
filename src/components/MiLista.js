import React from "react";


class MiLista extends React.Component{

 state = { incidencias :[

    {
      id_incidencia: 1,
      id_usuario: 'efa925p52',
      titulo: "Proyector averiado",
      descripcion: "El proyector no enciende",
      categoria: "hardware",
      nivel_urgencia: "alta",
      fecha_registro: "2025-03-20",
      estado: "Abierta",
      ubicacion: "A302"
    },
    {
      id_incidencia: 2,
      id_usuario: 'efa923p52',
      titulo: "Monitor roto",
      descripcion: "El monitor tiene la pantalla destrozada ",
      categoria: "hardware",
      nivel_urgencia: "media",
      fecha_registro: "2025-02-21",
      estado: "Abierta",
      ubicacion: "A241"
    },
    {
      id_incidencia: 3,
      id_usuario: 'e52925p52',
      titulo: "Ordenador reinicio automatico",
      descripcion: "El ordenador se reinicia automaticamente cada cierto tiempo",
      categoria: "software",
      nivel_urgencia: "alta",
      fecha_registro: "2022-01-20",
      estado: "En proceso",
      ubicacion: "A101"
    },
    {
      id_incidencia: 4,
      id_usuario: 'ef53223',
      titulo: "Proyector caido",
      descripcion: "El proyector se desmonto y exploto contra el suelo",
      categoria: "hardware",
      nivel_urgencia: "alta",
      fecha_registro: "2025-01-27",
      estado: "Resuelta",
      ubicacion: "A222"
    },
    {
      id_incidencia: 5,
      id_usuario: 'efa925p52',
      titulo: "Pc no enciende",
      descripcion: "El ordenador no se enciende de ninguna manera",
      categoria: "hardware",
      nivel_urgencia: "media",
      fecha_registro: "2022-06-30",
      estado: "Abierta",
      ubicacion: "A302"
    },
    {
      id_incidencia: 6,
      id_usuario: 'ef53223',
      titulo: "Raton y teclado desaparecidos",
      descripcion: "El teclado y raton de un ordenador no volvieron a aparecer",
      categoria: "hardware",
      nivel_urgencia: "bajo",
      fecha_registro: "2010-01-20",
      estado: "En proceso",
      ubicacion: "A112"
    },
    {
      id_incidencia: 7,
      id_usuario: 'ef222222',
      titulo: "Teclado roto",
      descripcion: "El teclado se ha encontrado completamente destrozado",
      categoria: "hardware",
      nivel_urgencia: "bajo",
      fecha_registro: "2027-09-16",
      estado: "Abierta",
      ubicacion: "A302"
    },
    {
      id_incidencia: 8,
      id_usuario: 'efa925p52',
      titulo: "Proyector no averiado",
      descripcion: "El proyector si enciende",
      categoria: "hardware",
      nivel_urgencia: "ninguna",
      fecha_registro: "2025-03-20",
      estado: "Resuelta",
      ubicacion: "A302"
    },
    {
      id_incidencia: 9,
      id_usuario: 'efa925p52',
      titulo: "Monitor monitorin",
      descripcion: "Le han pegado pegatinas a un monitor",
      categoria: "hardware",
      nivel_urgencia: "baja",
      fecha_registro: "2025-03-20",
      estado: "Resuelta",
      ubicacion: "A303"
    },
    {
      id_incidencia: 10,
      id_usuario: 'efa925p52',
      titulo: "Proyector averiado",
      descripcion: "El proyector no enciende",
      categoria: "hardware",
      nivel_urgencia: "alta",
      fecha_registro: "2025-03-20",
      estado: "Abierta",
      ubicacion: "A301"
    }


  ]};


  render() {
    return (
      <>
        <ul>
          {this.state.incidencias.map((i) => (
            <li key={i.id_incidencia}>
              <strong>Título:</strong> {i.titulo}<br />
              <strong>Descripción:</strong> {i.descripcion}<br />
              <strong>Usuario:</strong> {i.id_usuario}<br />
              <strong>Urgencia:</strong>{i.nivel_urgencia}<br/>
              <strong>Ubicación:</strong> {i.ubicacion}<br/><br/>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MiLista;


