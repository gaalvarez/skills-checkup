import { QuestionModel } from "../model/model";

export const QUESTIONS: {
  id: number;
  nombre: string;
  questions: QuestionModel[];
}[] = [
  {
    id: 1,
    nombre: "Angular Quiz",
    questions: [
      {
        id: 1,
        question: "¿Cuantos tipos de directivas existen en angular?",
        options: [
          "2, directivas de atributo y de estructura",
          "1 directivas solamente",
          "3, directivas de atributo, de estructura y los componentes que son directivas con template",
          "No lo sé aún",
        ],
        response: 2,
      },
      {
        id: 2,
        question:
          "¿Qué patrón en Angular ayuda a mejorar el reuso de componentes?",
        options: [
          "Smart and Dumb components",
          "Singleton",
          "Inyección de dependencia",
          "Usar layouts",
        ],
        response: 0,
      },
    ],
  },
  {
    id: 2,
    nombre: "Vue Quiz",
    questions: [
      {
        id: 1,
        question:
          "¿Cuál es la forma de pasar información de un componente padre a un hijo?",
        options: ["Atributos", "Propiedades", "Entradas", "Eventos"],
        response: 1,
      },
      {
        id: 2,
        question: "¿Una propiedad computada es?",
        options: [
          "La forma de comunicarse con el elemento padre",
          "Una forma de extender los datos para simplificar las expresiones en el template",
          "Un escuchador de los cambios de una propiedad de data",
          "Todas las anteriores",
        ],
        response: 1,
      },
    ],
  },
];
