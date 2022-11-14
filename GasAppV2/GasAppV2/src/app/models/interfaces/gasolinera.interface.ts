export interface GasolineraListResponse {
  Fecha:             string;
  ListaEESSPrecio:   Gasolinera[];
  Nota:              string;
  ResultadoConsulta: string;
}

export interface Gasolinera {
    codigoPostal:                   string;
    direccion:                      string;
    horario:                        string;
    //latitud:                        string;
    localidad:                      string;
    //longitudWGS84:                  string;
    //margen:                         string;
    municipio:                      string;
    //precioBiodiesel:                string;
    //precioBioetanol:                string;
    //precioGasNaturalComprimido:     string;
    //precioGasNaturalLicuado:        string;
    //precioGasesLicuadosDelPetróleo: string;
    precioGasoleoA:                 string;
    precioGasoleoB:                 string;
    //precioGasoleoPremium:           string;
    //precioGasolina95E10:            string;
    precioGasolina95E5:             string;
    //precioGasolina95E5Premium:      string;
    //precioGasolina98E10:            string;
    //precioGasolina98E5:             string;
    //precioHidrogeno:                string;
    provincia:                      string;
    //remisión:                       string;
    rotulo:                         string;
    //tipoVenta:                      string;
    //bioEtanol:                      string;
    //ésterMetílico:                  string;
    ideess:                         string;
    //idMunicipio:                    string;
    //idProvincia:                    string;
    //idccaa:                         string;

}
