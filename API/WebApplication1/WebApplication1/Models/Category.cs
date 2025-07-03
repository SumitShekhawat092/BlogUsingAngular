using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Category
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public string UrlHandle { get; set; } = null!;
}
