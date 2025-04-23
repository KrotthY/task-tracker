export const ErrorHandler = (err,req,res,next) =>{
  const ErrorStatus = err.status || 500
  const ErrorMessage = err.message || 'Internal server error'
  res.status(ErrorStatus).json({success:false, status:ErrorStatus, message: ErrorMessage})
}