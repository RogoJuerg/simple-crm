export class Event {
    title: string;
    dueTo: number;
    selectedClient: string;
    description: string;

    constructor(obj?: any) {
        this.title = obj ? obj?.title : '';
        this.dueTo = obj ? obj?.dueTo : '';
        this.selectedClient = obj ? obj?.selectedClient : '';
        this.description = obj ? obj?.description : '';
    }

    public toJSON() {
        return {
            title: this.title,
            dueTo: this.dueTo,
            selectedClient: this.selectedClient,
            description: this.description
        };
    }

}
