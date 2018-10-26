export class ServiceEntity {
    public id_service: number;
    public content: string;
    public createDate: string;
    public modifyDate: string;
    public note: string;

    constructor(id_service: number, content: string,
        createDate: string, modifyDate: string,
        note: string) {

        this.id_service = id_service;
        this.content = content;
        this.createDate = createDate;
        this.modifyDate = modifyDate;
        this.note = note;

    }
}

