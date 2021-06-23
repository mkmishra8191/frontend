export interface Leaves {
  

    id: number,
    cl: number,
    takencl: number,
    pl: number,
    takenpl: number,
    sl: number,
    takensl: number,
    empInfo: {
        id: number,
        name: string,
        department: {
            id: number,
            name: string
        },
        skills: string,
        designation: string
    }
   
  }