import { supabase } from '../lib/supabase'

export const ObtenerDatos = async () => {
    const { data: Tabla, error } = await supabase
        .from('SAO')
        .select('*')

    if (error) {
        console.error('Error al Obtener la Tabla de Planetas', error.message)
    }
    console.log('asasas', Tabla)
    return Tabla;
}