const { userlist } = require("./user.controller")

let attendanceList = [
    { attendance_id: 1, user_id: 1, date: new Date("2025-01-01"), time: "08:00:10", status: "hadir" },
    { attendance_id: 2, user_id: 2, date: new Date("2025-01-01"), time: "08:05:15", status: "alpa" },
    { attendance_id: 3, user_id: 3, date: new Date("2025-01-01"), time: "08:10:20", status: "sakit" },
    { attendance_id: 4, user_id: 4, date: new Date("2025-01-01"), time: "08:15:25", status: "hadir" },
    { attendance_id: 5, user_id: 1, date: new Date("2025-01-02"), time: "08:20:30", status: "izin" },
    { attendance_id: 6, user_id: 2, date: new Date("2025-01-02"), time: "08:25:35", status: "hadir" },
    { attendance_id: 7, user_id: 3, date: new Date("2025-01-02"), time: "08:30:40", status: "alpa" },
    { attendance_id: 8, user_id: 4, date: new Date("2025-01-02"), time: "08:35:45", status: "sakit" },
    { attendance_id: 9, user_id: 1, date: new Date("2025-01-03"), time: "08:40:50", status: "hadir" },
    { attendance_id: 10, user_id: 2, date: new Date("2025-01-03"), time: "08:45:55", status: "izin" },
    { attendance_id: 11, user_id: 3, date: new Date("2025-01-03"), time: "08:50:00", status: "hadir" },
    { attendance_id: 12, user_id: 4, date: new Date("2025-01-03"), time: "08:55:05", status: "alpa" },
    { attendance_id: 13, user_id: 1, date: new Date("2025-01-04"), time: "09:00:10", status: "sakit" },
    { attendance_id: 14, user_id: 2, date: new Date("2025-01-04"), time: "09:05:15", status: "hadir" },
    { attendance_id: 15, user_id: 3, date: new Date("2025-01-04"), time: "09:10:20", status: "izin" },
    { attendance_id: 16, user_id: 4, date: new Date("2025-01-04"), time: "09:15:25", status: "hadir" },
    { attendance_id: 17, user_id: 1, date: new Date("2025-01-05"), time: "09:20:30", status: "alpa" },
    { attendance_id: 18, user_id: 2, date: new Date("2025-01-05"), time: "09:25:35", status: "sakit" },
    { attendance_id: 19, user_id: 3, date: new Date("2025-01-05"), time: "09:30:40", status: "hadir" },
    { attendance_id: 20, user_id: 4, date: new Date("2025-01-05"), time: "09:35:45", status: "izin" }
];

function getAllAttendance(request, response) {
    return response.json({
        success: "success",
        message: "All attendance records have been loaded",
        data: attendanceList,
    })
}

function getAttendancesByUserId(request, response) {
    let userID = Number(request.params.user_id)
    let attendances = []

    attendanceList.forEach(attendance => {
        if (attendance.user_id === userID) {
            attendances.push(attendance)
        }
    })

    return response.json({
        success: "success",
        message: `Attendance records for user with id ${userID} have been loaded`,
        data: attendances
    })
}

function addAttendance(request, response) {
    let newAttendance = {
        attendance_id: attendanceList.length + 1,
        user_id: Number(request.body.user_id),
        date: new Date(request.body.date),
        time: request.body.time,
        status: request.body.status
    }
    
    if(newAttendance) {
        attendanceList.push(newAttendance)
    }

    return response.json({
        success: "success",
        message: "New attendance record has been added",
        data: newAttendance
    })
}

function getSummaryByUserId(request, response) {
    let userID = Number(request.params.user_id)
    let attendance_summary = {
        hadir: 0,
        sakit: 0,
        izin: 0,
        alpa: 0
    }

    attendanceList.forEach(attendance => {
        if (attendance.user_id === userID) {
            switch (attendance.status) {
                case "hadir":
                    attendance_summary.hadir++
                    break
                case "sakit":
                    attendance_summary.sakit++
                    break
                case "izin":
                    attendance_summary.izin++
                    break
                case "alpa":
                    attendance_summary.alpa++
                    break
            }
        }
    })

    return response.json({
        success: "success",
        message: `Attendance summary for user with id ${userID} has been loaded`,
        data: {
            user_id: userID,
            month: "10-2023",
            attendance_summary: attendance_summary
        }
    })
}

function getAnalysis(request, response) {
    let filter = {
        start_date: new Date(request.body.start_date),
        end_date: new Date(request.body.end_date),
        group_by: request.body.group_by
    }

    let filteredData = []
    userlist.forEach(user => {
        attendanceList.forEach(attendance => {
            if (user.id === attendance.user_id && (user.role).includes(filter.group_by)) {
                if (attendance.date >= filter.start_date && attendance.date <= filter.end_date) {
                    filteredData.push(attendance)
                }
            }
        })
    })

    let userIDs = []
    filteredData.forEach(attendance => {
        if (!userIDs.includes(attendance.user_id)) {
            userIDs.push(attendance.user_id)
        }
    })

    let totalAttendance = {
        hadir: 0,
        sakit: 0,
        izin: 0,
        alpa: 0
    }
    filteredData.forEach(attendance => {
        Object.keys(totalAttendance).forEach(key => {
            if (attendance.status === key) {
                totalAttendance[key]++
            }
        })
    })

    let attendanceCount = filteredData.length
    let attendanceRate = {
        hadir_percentage: `${totalAttendance.hadir / attendanceCount * 100} Percent`,
        sakit_percentage: `${totalAttendance.sakit / attendanceCount * 100} Percent`,
        izin_percentage: `${totalAttendance.izin / attendanceCount * 100} Percent`,
        alpa_percentage: `${totalAttendance.alpa / attendanceCount * 100} Percent`
    }

    let groupedAnalysis = {
        group_by: filter.group_by,
        total_users: userIDs.length,
        total_attendance: attendanceCount,
        attendance_rate: attendanceRate
    }

    return response.json({
        success: "success",
        message: "Attendance analysis has been generated",
        data: {
            analysis_period: {
                start_date: (filter.start_date).toISOString().slice(0, 10),
                end_date: (filter.end_date).toISOString().slice(0, 10)
            },
            grouped_analysis: groupedAnalysis
        }
    })
}

module.exports = { getAllAttendance, getAttendancesByUserId, addAttendance, getSummaryByUserId, getAnalysis }