import sys
import json
import face_recognition

known_image = face_recognition.load_image_file("E:\\研究生\\课程\\高级程序语言\\人脸点名系统\\后端\\face_naming_system_serve\\public\\uploads\\"+sys.argv[1])
unknown_image = face_recognition.load_image_file("E:\\研究生\\课程\\高级程序语言\\人脸点名系统\\后端\\face_naming_system_serve\\public\\upload_stu\\"+sys.argv[2])
biden_encoding = face_recognition.face_encodings(known_image)[0]
unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
results = face_recognition.compare_faces([biden_encoding], unknown_encoding)

#print(results[0])
if results[0] == True:
    a = 0
else:
    a = 1

send_message_back = {
    "result":a,
    'code':0,
    'message': """correct""" ,
}

print(json.dumps(send_message_back))