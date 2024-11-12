interface Record {
    data: string;
    partida: string;
    destino: string;
    kmPartida: string;
    horarioPartida: string;
    kmChegada: string;
    horarioChegada: string;
    veiculo: string;
    motorista: string;
  }
  
  const records: Record[] = [];
  
  export const addRecord = (record: Record) => {
    records.push(record);
  };
  
  export const getRecords = () => records;
  