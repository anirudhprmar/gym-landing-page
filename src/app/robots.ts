import { type MetadataRoute } from "next";

export default function robot():MetadataRoute.Robots{
    return {
        rules:{
            userAgent:'*',
            allow:'/',
            disallow:[]
        },
        sitemap:'https://gym-six-sand.vercel.app/sitemap.xml'
    }
}