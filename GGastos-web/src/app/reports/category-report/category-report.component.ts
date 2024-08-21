import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-category-report',
    templateUrl: './category-report.component.html',
    styleUrls: ['./category-report.component.css']
})
export class CategoryReportComponent implements OnInit {
    
    @Output() isLoaded = new EventEmitter<boolean>();

    isLoad: boolean = true;

    xx: any = {
        tooltip: {
            trigger: 'item'
        },

        series: [{
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            color: [
                '#37A2DA',
                '#32C5E9',
                '#67E0E3',
                '#9FE6B8',
                '#FFDB5C',
                '#ff9f7f',
            ],
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    };

    /*

    {
        nome: "cas 1",
        data: "03/08/2024",
        valor: "100,00"
    },
    {
        nome: "cas 2",
        data: "03/08/2024",
        valor: "100,00"
    },
    {
        nome: "cas 3",
        data: "03/08/2024",
        valor: "1001111111,00"
    }

    */

    data: any = [
        {
            nome: "Casa",
            icone: "home",
            cor: "red",
            data: "03/08/2024",
            valor: "100,00",
            aberto: false,
            existeSaida: true,
            subCategorias: [],
            saidas: [],
            showSub: [
                {
                    nome: "sub 1 Casa",
                    icone: "home",
                    cor: "red",
                    data: "03/08/2024",
                    valor: "100,00",
                    saidas: [
                        {
                            nome: "sub 1",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "sub 2",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "sub 3",
                            data: "03/08/2024",
                            valor: "100,00"
                        }
                    ],
                },
                {
                    nome: "sub 2 Casa",
                    icone: "home",
                    cor: "red",
                    data: "03/08/2024",
                    valor: "100,00",
                    saidas: [
                        {
                            nome: "sub 1",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "sub 2",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "sub 3",
                            data: "03/08/2024",
                            valor: "100,00"
                        }
                    ],
                }
            ]
        },
        {
            nome: "Comida",
            icone: "home",
            cor: "red",
            data: "03/08/2024",
            valor: "100,00",
            aberto: false,
            saidas: [
                {
                    nome: "com 1",
                    data: "03/08/2024",
                    valor: "100,00"
                },
                {
                    nome: "com 2",
                    data: "03/08/2024",
                    valor: "100,00"
                },
                {
                    nome: "com 3",
                    data: "03/08/2024",
                    valor: "100,00"
                }
            ],
            subCategorias: []
        },
        {
            nome: "Hotelzinho",
            icone: "home",
            cor: "red",
            data: "03/08/2024",
            valor: "100,00",
            aberto: false,
            saidas: [],
            subCategorias: [
                {
                    nome: "sub prima",
                    icone: "home",
                    cor: "red",
                    data: "03/08/2024",
                    valor: "100,00",
                    saidas: [
                        {
                            nome: "prima 1",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "prima 2",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "prima 3",
                            data: "03/08/2024",
                            valor: "100,00"
                        }
                    ],
                },
                {
                    nome: "sub soninho",
                    icone: "home",
                    cor: "red",
                    data: "03/08/2024",
                    valor: "100,00",
                    saidas: [
                        {
                            nome: "mimi 1",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "mimi 2",
                            data: "03/08/2024",
                            valor: "100,00"
                        },
                        {
                            nome: "mimi 3",
                            data: "03/08/2024",
                            valor: "100,00"
                        }
                    ],
                }
            ]
        }
    ]


    constructor() {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.isLoaded.emit();
            this.isLoad = false;

            console.log('CATEGORY REPORT');
        }, 1000);
    }

    onAbriEFecha(value: any) {
        value.aberto = !value.aberto;

        //console.log(value);

        if (value.subCategorias && value.subCategorias.length > 0) {
            console.log("TEM SUB");
            if (value.aberto) {
                console.log("Coloca");

                value.subCategorias = value.showSub;
            } else {
                console.log("Tira");

                value.subCategorias = [];
            }

        
        } else {
            if (value.aberto) {
                console.log("Coloca");

                value.subCategorias = value.showSub;
            } else {
                console.log("Tira");

                value.subCategorias = [];
            }

            //value.saidas = [];
        }

        //value.saidas = [];
        //value.subCategorias = [];
    }

    tiraSoSaidas(value: any) {
        console.log("QUASE SUB");
        console.log(value);

        value.saidas = [];
    }

}
