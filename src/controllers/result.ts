import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { Result } from "../models/results";
import { Student } from "../models/students";

export const uploadResult = expressAsyncHandler(
    async (req:Request, res:Response)=>{
        const {scores, registrationNumber, session} = req.body
        try{
            const checkReg = await Student.findOne({registrationNumber})
            
            
            
            if(!checkReg){
                res.status(400).send({
                    message:'Student with this registrationNumber does not exist'
                })
                return
            }
            
            
            const findDuplicate = await Result.findOne({regNumber:registrationNumber, session})
           
            console.log(findDuplicate);
            if(findDuplicate){
                res.status(400).send({
                    message:'Result for this session has already been uploaded for this student'
                })
                return
            }
            
            const result = await Result.create({
                regNumber:registrationNumber,
                scores,
                session,
                studentId:checkReg._id,
                level:checkReg.level
            })

            const updateStudent = await Student.findOneAndUpdate({registrationNumber}, {
                $addToSet:{results:result._id}
            })
            res.json({
                message:'Result saved successfully',
                result
            })
        }catch(error){
            res.status(500).send({
                message:'Server Error',
                error
            })
        }
    }
)

export const EditResult = expressAsyncHandler(
    async (req:Request, res:Response)=>{
        const {scores} = req.body
        const resultId = req.params.id
        try{
            const result = await Result.findByIdAndUpdate(resultId, {
                scores
            }, {new:true})
            res.json({
                message:'Student result modified',
                result
            })
        }catch(error){
            res.status(500).send({
                message:'Server Error',
                error
            })
        }
    }
)

export const getStudentResults = expressAsyncHandler(
    async(req:Request, res:Response)=>{
        const id = req.params.id
        try{
            const result = await Student.findById(id)
                    .populate("results")

                    res.json({
                        message:'Student result fetched',
                        result
                    })

        }catch(error){
            res.status(500).send({
                message:'Server Error',
                error
            })
        }
    }
)

export const getSingleResult = expressAsyncHandler(
    async(req:Request, res:Response)=>{
        const id = req.params.id
        try{
            const result = await Result.findById(id).populate('studentId')

                res.json({
                    message:'single result fetched',
                    result
                })

        }catch(error){
            res.status(500).send({
                message:'Server Error',
                error
            })
        }
    }
)