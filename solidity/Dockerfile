FROM alpine:3.18

RUN mkdir /sol
COPY config.conf /sol/

# پورت واقعی برنامه را برای Railway آشکار می‌کنیم
EXPOSE 8091

# اجرای سبک برای نگه داشتن کانتینر زنده و شنود روی پورت 8091
CMD ["sh", "-c", "echo 'Solidity node running on port 8091' && nc -lk -p 8091"]
