import Swal from 'sweetalert2';
import axios from './axios';
import { Alerta } from '../utils/Alertas'
import { API } from '../utils/Endpoints'

const SaveMonitores = async (nombre, apellido, programa, semestre, cedula, informacion ) => {
    try {
        let method = 'POST';
        let url = API + 'Add_Monitor';
        let data = {nombre, apellido, programa, semestre, cedula, informacion};
        const response = await axios(method, url, data);
        if (response.status === 200) {
            return response.data
        }
    } catch (err) {
        Swal.close();
        Swal.fire(Alerta[4])
    }
}

const EditMonitores = async (id) => {
    try {
        let method = 'POST';
        let url = API + 'Get_Monitor';
        let data = null;
        const response = await axios(method, url, data);
        if (response.status === 200) {
            return response.data
        }
    } catch (err) {
        Swal.close();
        Swal.fire(Alerta[4])
    }
}

const DeleteMonitor = async (id) => {
    try {
        let method = 'POST';
        let url = API + 'Delete_Monitor/' + id;
        let data = null;
        const response = await axios(method, url, data);
        if (response.status === 200) {
           return Swal.fire(Alerta[2])
        }
    } catch (err) {
        Swal.close();
        Swal.fire(Alerta[4])
    }
}

export {
    SaveMonitores,
    EditMonitores,
    DeleteMonitor
}