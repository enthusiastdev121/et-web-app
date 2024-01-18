 # Step 1: Build the app in image 'builder'
FROM node:14.17.1 as builder
RUN ls
WORKDIR /usr/src/app
RUN ls
COPY . .
ARG image_name
RUN ls
RUN if [ $image_name = "audition" ] ; then echo $image_name; cp ./env/.env.auditions /usr/src/app/.env; fi
RUN if [ $image_name = "modeling" ] ; then echo $image_name; cp ./env/.env.modeling /usr/src/app/.env; fi
RUN if [ $image_name = "talento" ] ; then echo $image_name; cp ./env/.env.talento /usr/src/app/.env; fi
RUN if [ $image_name = "discovertalent" ] ; then echo $image_name; cp ./env/.env.adorableKids /usr/src/app/.env; fi

RUN npm install
RUN npm install @progress/kendo-react-common
RUN npm install @progress/kendo-licensing
RUN npm rebuild
RUN npm run build


CMD [ "npm","start" ]
# RUN ls -la
# ARG NEXT_PUBLIC_FIREBASE_GOOGLE_WEB_CLIENT_ID
# ARG NEXT_PUBLIC_WHITELABEL
# ARG NEXT_PUBLIC_X_ORIGIN
# ARG NEXT_PUBLIC_CLIENT_ID
# RUN echo "${NEXT_PUBLIC_FIREBASE_GOOGLE_WEB_CLIENT_ID}" >.env
# RUN echo "${NEXT_PUBLIC_WHITELABEL}"
# RUN echo "${NEXT_PUBLIC_X_ORIGIN}"
# RUN echo "${NEXT_PUBLIC_CLIENT_ID}"
# RUN echo "$(<.env)"
# RUN cat 
# RUN npm install --save-dev @types/react@18.0.2
# RUN npm install --save-dev typescript @types/react @types/node
# RUN npm install
# RUN npm install @progress/kendo-react-common
# RUN npm install @progress/kendo-licensing
# RUN npm rebuild
# RUN npm run build
# CMD ["/bin/bash"]