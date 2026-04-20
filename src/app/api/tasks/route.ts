import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(){
    try{
        const tasks = await prisma.task.findMany({
            orderBy: {createdAt: "desc"},
        });
        return NextResponse.json(
            {
                success:true,
                message:"Tasks fetched successfully",
                data:tasks,
            },{
                status:200,
            }
        )
    }catch(error){
        console.error("GET /api/tasks error:", error);
        return NextResponse.json(
            {
                success:false,
                message:"Failed to fetch tasks",
            },
            {status:500}
        )
    }
};

export async function POST(request:Request){
    try{
        const body = await request.json();
        const {title,description,status} = body;

        if(!title || !description || !status){
            return NextResponse.json(
            {
                success:false,
                message:"Title, description, and status are required",
            },
            {status:400}
            )
        }

        const newTask = await prisma.task.create({
            data:{
                title,
                description,
                status,
                priority:"Medium",
                assignee:"Unassigned",
                userId: 1
            }
        });
        return NextResponse.json(
            {
                success:true,
                message:"Task created successfully",
                data:newTask,
            },
            {status:201}
        )
    }catch(error){
        console.error("POST /api/tasks error:", error);
        return NextResponse.json(
            {
                success:false,
                message:"Failed to create task",
            },
            {status:500}
        )
    }
}