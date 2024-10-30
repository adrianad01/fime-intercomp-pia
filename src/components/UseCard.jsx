import { Link } from "react-router-dom";

export const UserCard = () => {

    return (
        <div className="card">
          <div className="profile-picture" style={{color: '#054F8F'}}><svg xmlns="http://www.w3.org/2000/svg" width="180" height="250" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></div>
          <div className="card-profile">
            <div className="profile-info">
              <div className="name">Nombre Apellido Apellido</div>
              <div className="student-id">0000000</div>
              <div className="faculty">Facultad de Ingeniería Mecánica Eléctrica</div>
              <div className="program">Ingeniería Administración de Sistemas</div>
            </div>
            <div className="card-status">
              <Link to='mis-tramites' style={{ color: 'white' }}>
                Trámite en curso:
                Titulación - ver
              </Link>
            </div>
          </div>
        </div>
      );

}