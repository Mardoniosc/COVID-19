export class Estado {
  constructor(
    public uid: number,
    public uf: string,
    public state: string,
    public cases: number,
    public deaths: number,
    public suspects: number,
    public refuses: number,
    public datetime: Date
  ){}
}
