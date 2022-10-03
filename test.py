import sys
import json
import face_recognition

known_image = face_recognition.load_image_file("E:\\研究生\\课程\\高级程序语言\\人脸点名系统\\后端\\face_naming_system_serve\\public\\uploads\\lyf.jpg")
unknown_image = face_recognition.load_image_file("E:\\研究生\\课程\\高级程序语言\\人脸点名系统\\后端\\face_naming_system_serve\\public\\upload_stu\\lyf1.jpg")
biden_encoding = face_recognition.face_encodings(known_image)[0]
unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
results = face_recognition.compare_faces([biden_encoding], unknown_encoding)
print(results[0])