# Hệ Thống Quản Lý Tài Chính Cá Nhân

## Giới thiệu
Hệ thống giúp người dùng quản lý tài chính cá nhân, bao gồm theo dõi thu nhập, chi tiêu, lập ngân sách, nhắc nhở hóa đơn và phân tích tài chính. Hệ thống sử dụng kiến trúc microservices để đảm bảo hiệu suất, dễ mở rộng và bảo trì.

## Kiến trúc hệ thống

### 1. Frontend (WebApp)
- Giao diện React.js
- Kết nối backend qua REST API

### 2. Backend (Microservices trên Kubernetes)
- User Service: Quản lý người dùng, xác thực (OAuth2, JWT)
- Transaction Service: Quản lý thu nhập, chi tiêu
- Budget Service: Theo dõi ngân sách, nhắc nhở hóa đơn
- Report & Analytics Service: Phân tích tài chính cá nhân
- Notification Service: Gửi email, push notification
- Integration Service: Kết nối ngân hàng, ví điện tử

### 3. Hạ tầng & Triển khai
- Kubernetes cluster
- PostgreSQL database
- Redis (cache)
- Kafka (event-driven)
- Prometheus + Grafana (monitoring)
- Terraform (infrastructure as code)

## Cấu trúc thư mục
```
.
├── frontend/                 # React frontend application
├── backend/                  # Backend microservices
│   ├── user-service/        # User management service
│   ├── transaction-service/ # Transaction management service
│   ├── budget-service/      # Budget management service
│   ├── report-service/      # Reporting and analytics service
│   ├── notification-service/# Notification service
│
├── infrastructure/          # Infrastructure as Code (Terraform)
│   ├── kubernetes/         # Kubernetes manifests
│   ├── terraform/          # Terraform configurations
│   └── monitoring/         # Monitoring configurations
└── docs/                   # Documentation
```

## Yêu cầu hệ thống
- Node.js >= 16.x
- Docker >= 20.x
- Kubernetes >= 1.24
- Terraform >= 1.0
- PostgreSQL >= 14
- Redis >= 6
- Kafka >= 3.x

## Hướng dẫn cài đặt và chạy
(Đang cập nhật...) 
