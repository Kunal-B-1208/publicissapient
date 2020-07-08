import { StoryType } from '../enums/data.enums';

export class StoryDetails
{
    public created_at : Date;
    public title : string;
    public url: string;
    public author : string;
    public points :number;
    //public story_text: string;
    public num_comments: number;
    public objectID: string;
    
}

export class Pagination
{
    public page : number;
    public nbPages: number;
    public hitsPerPage: number;
}

export class StoryOutput extends Pagination
{
    public hits: StoryDetails[];
}

export class UserDetails
{
    public id: number;
    public username: string;
    public about: string;
    public created_at: Date;
}

export class CommentDetails
{
    public author:string;
    public created_at:Date;
    public comment_text :string;
    public story_title:string;
}

export class CommentOutput extends Pagination
{
    public hits: CommentDetails[];
}

export class DataSender{
    public data :any;
    public typeOfData : StoryType
}