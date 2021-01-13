using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pedidos.Models;

namespace Pedidos.Services
{
    public interface IPedidosServices
    {
        Models.Pedidos PostPedido(Models.Pedidos nuevaRepartidor);
        IEnumerable<Models.Pedidos> GetPedidos();
        Models.Pedidos GetPedido(int id);
        Models.Pedidos PutPedido(int id, Models.Pedidos nuevaRepartidor);
        bool DeletePedido(int id);
    }
}
